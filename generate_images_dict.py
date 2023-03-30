# Write a function to transform an image to a 150x250 thumbnail and store it in the same directory

import os
import json
from PIL import Image


def generate_images_thumbnail(path):
    images_dict = {}
    for filename in os.listdir(path):
        if filename.endswith(".jpg"):
            new_filename = filename[:-4] + "_thumbnail.jpg"
            img = Image.open(path + filename)
            img.thumbnail((150, 250))
            img.save(path + new_filename)
            images_dict[filename] = path + new_filename
    return images_dict

def generate_images_dict(path):
    images_dict = {}
    images_list = []
    for filename in os.listdir(path):
        if filename.endswith(".jpg"):
            img = Image.open(path + filename)
            width, height = img.size
            images_list.append({
                "name": filename,
                "largeURL": import_name(filename),
                "thumbnailURL": import_name(filename[:-4] + "_thumbnail.jpg"),
                "height": height,
                "width": width
            })
    images_dict["images"] = images_list
    return images_dict


def save_dict_to_json(dict, filename):
    with open(filename, 'w') as f:
        json.dump(dict, f)


def import_name(name):
    return name.split('.')[0].replace('_', '').replace('-', '')


def generate_event_import(path):
    # path = './images/event'
    files = os.listdir(path)
    for file in files:
        name = import_name(file)
        print("import " + name + " from '@/images/event/" + file + "'")

# write a function that deletes all the thumbnails in the directory
def delete_thumbnails(path):
    for filename in os.listdir(path):
        if filename.endswith("_thumbnail.jpg"):
            os.remove(path + filename)


if __name__ == "__main__":
    delete_thumbnails('./src/images/event/')
    save_dict_to_json(generate_images_dict(
        "./src/images/event/"), 'images.json')
    generate_images_thumbnail("./src/images/event/")
    generate_event_import('./src/images/event')
