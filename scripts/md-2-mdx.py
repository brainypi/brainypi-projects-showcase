import os
import gitlab
import json

TOKEN = os.environ.get('TOKEN', "")

CURR_PATH = os.getcwd()
JSON_OUT_PATH = CURR_PATH + "/src/pages/index-data.json"
IN_DIR_PATH = CURR_PATH + "/docs/raw/"
OUT_DIR_PATH = CURR_PATH + "/docs/projects/"

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
        mdxFile.writelines(content)

        mdxFile.close()
    return json


def forAllmdFilesInDir():
    fileList = os.listdir(IN_DIR_PATH)

    indexData = {}
    projectList = []

    for file in fileList:
        fileJson = md2mdx(IN_DIR_PATH + file, OUT_DIR_PATH + file, file)
        if "title" in fileJson:
            projectList.append(fileJson)

    indexData['projectList'] = projectList

    with open(JSON_OUT_PATH, 'w+', encoding='utf-8') as f:
        json.dump(indexData, f, ensure_ascii=False, indent=4)

def gitlab2raw():
    gl = gitlab.Gitlab(url='https://gitlab.iotiot.in', private_token=TOKEN)

    project = gl.projects.get(4185)
    issue = project.issues.get(50)
    notes = issue.notes.list()

    for note in notes:
        i_note = issue.notes.get(note.id)
        file_name = IN_DIR_PATH + str(note.id) + ".md"
        rawFile = open(file_name, 'w+')
        rawFile.writelines(i_note.body)
        rawFile.close()

if str(TOKEN):
    gitlab2raw()

forAllmdFilesInDir()