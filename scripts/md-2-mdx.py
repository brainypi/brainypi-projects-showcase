import os
import gitlab
import json

TOKEN = os.environ.get('TOKEN', "")

IMAGE_DWN_URL = "https://gitlab.iotiot.in/interns-projects/core-internship-22/brnpi-compatibility"

CURR_PATH = os.getcwd()
JSON_OUT_PATH = CURR_PATH + "/src/pages/index-data.json"
IN_DIR_PATH = CURR_PATH + "/docs/raw/"
OUT_DIR_PATH = CURR_PATH + "/docs/projects/"
IMG_DIR_PATH = CURR_PATH + "/static/img/"
IN_DIR_RM_PATH = CURR_PATH + "/docs/raw"
UPLOAD_DIR = CURR_PATH + "/docs/raw/uploads/"

def md2mdx(in_filepath, out_filepath, filename):
    title = ""
    description = ""
    tags = []
    origLink = ""
    thumbnail = "img/default-image.png"
    content = []
    json = {}

    with open(in_filepath) as file:
        for line in file.readlines():
            if line.find('Title') > 0:
                line = line.strip('\n')
                parsedLine = line.split(':')[1]
                parsedLine = parsedLine.strip('#')
                parsedLine = parsedLine.strip()
                title = parsedLine
            elif line.find('assigned') > 0:
                continue
            elif line.find('Description') > 0:
                content.append(line)
                line = line.strip('\n')
                parsedLine = line.split(':')[1]
                parsedLine = parsedLine.strip('*')
                parsedLine = parsedLine.strip()
                description = parsedLine
            elif line.find('Useful for') > 0:
                content.append(line)
                line = line.strip('\n')
                parsedLine = line.split(':')[1]
                parsedLine = parsedLine.strip('*')
                parsedLine = parsedLine.strip()
                Tags = parsedLine.split(",")
                for tag in Tags:
                    tags.append(tag.strip().strip('.'))
            elif line.find('Link to original project') > 0:
                content.append(line)
                line = line.strip('\n')
                parsedLine = line[line.find(':') + 1:]
                parsedLine = parsedLine.strip('*')
                parsedLine = parsedLine.strip('.')
                parsedLine = parsedLine.strip()
                origLink = parsedLine
            elif line.find('Image') > 0:
                #content.append(line)
                line = line.strip('\n')
                parsedLine = line[line.find(':') + 1:]
                parsedLine = parsedLine.strip('*')
                parsedLine = parsedLine.strip('.')
                parsedLine = parsedLine.strip()
                parsedLine = parsedLine[parsedLine.find('(') + 1:]
                parsedLine = parsedLine[:parsedLine.find(')')]

                #cmd = "wget " + IMAGE_DWN_URL + parsedLine + " -O " + IMG_DIR_PATH + filename.replace('.md', '.png')
                #os.system(cmd)

                thumbnail = "img/" + filename.replace('.md', '.png')

                content.append("<img alt=\"Oops!, No Image to display.\" src={useBaseUrl('" + thumbnail + "')} width=\"200\" />\n")
            else:
                content.append(line)

    if title:
        json['title'] = title
        json['description'] = description
        json['thumbnail'] = thumbnail
        json['description'] = description
        json['link'] = out_filepath.replace(CURR_PATH + "/", '').replace('.md', '')

        mdxFile = open(out_filepath, 'w+')

        mdxFile.write("---\n");
        mdxFile.write("id: %s\n" % filename.replace('.md', ''));
        mdxFile.write("title: %s\n" % title);
        mdxFile.write("description: %s\n" % title);
        mdxFile.write("image: %s\n" % thumbnail);
        mdxFile.write("keywords: %s\n" % tags);
        mdxFile.write("---\n\n\n");
        mdxFile.write("import useBaseUrl from '@docusaurus/useBaseUrl';");
        mdxFile.write("\n\n\n");
        
        mdxFile.writelines(content)

        mdxFile.close()
    return json


def forAllmdFilesInDir():
    files = [ f for f in os.listdir(IN_DIR_PATH) if os.path.isfile(os.path.join(IN_DIR_PATH,f)) ]
    indexData = {}
    projectList = []

    for file in files:
        if file.find('.md') > 0:
            print("Processing file: %s .." % file)
            fileJson = md2mdx(IN_DIR_PATH + file, OUT_DIR_PATH + file, file)
            if "title" in fileJson:
                projectList.append(fileJson)
                print("\033[1;32;48m Success:\033[1;37;0m File: %s processed successfully." % file)
            else:
                print("\033[1;33;48m Warning:\033[1;37;0m File: %s does not contain 'Title', skipping the file." % file)

    indexData['projectList'] = projectList

    with open(JSON_OUT_PATH, 'w+', encoding='utf-8') as f:
        json.dump(indexData, f, ensure_ascii=False, indent=4)

forAllmdFilesInDir()

# Copy images 
os.system("cp -ar " + UPLOAD_DIR + "* " + IMG_DIR_PATH)

# Cleanup 
os.system("rm -rf " + IN_DIR_RM_PATH)