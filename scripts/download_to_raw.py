import os
import gitlab
import json

GIT_URL = "https://gitlab.iotiot.in/interns-projects/core-internship-22/brnpi-compatibility.git"

CURR_PATH = os.getcwd()
JSON_OUT_PATH = CURR_PATH + "/src/pages/index-data.json"
IN_DIR_PATH = CURR_PATH + "/docs/raw/"
OUT_DIR_PATH = CURR_PATH + "/docs/projects/"
IMG_DIR_PATH = CURR_PATH + "/static/img/"

def gitlab2raw():
    gl = gitlab.Gitlab(url='https://gitlab.iotiot.in', private_token=TOKEN)

    project = gl.projects.get(4185)
    issue = project.issues.get(62)
    notes = issue.notes.list(get_all=True)

    for note in notes:
        i_note = issue.notes.get(note.id)
        file_name = IN_DIR_PATH + str(note.id) + ".md"
        rawFile = open(file_name, 'w+')
        rawFile.writelines(i_note.body)
        rawFile.close()

#if str(TOKEN):
#    gitlab2raw()

CMD = "git clone " + GIT_URL + " " + IN_DIR_PATH

os.system(CMD)