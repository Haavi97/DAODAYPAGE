import os


def generate_import(path):
    # path = './images/avatars'
    files = os.listdir(path)
    for file in files:
        file_name = file.split('.')[0]
        file_name = file_name.replace('_', '')
        file_name = file_name.split('-')
        name = file_name[0]
        # capitaliza first letter
        fam_name = file_name[1][0].upper() + file_name[1][1:]
        full_name = name + fam_name
        print("import " + full_name + "Image from '@/images/avatars/" + file + "'")


generate_import('./src/images/avatars')
