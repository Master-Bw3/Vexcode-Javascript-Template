import os

api_file = open("src/Compiled_JS/api/vex.js", "w")
new_api_file = open("transpiler/vex.js", "r")
api_file.write(new_api_file.read())