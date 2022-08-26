import js2py


with open("./src/js/bundled/main.js", 'r+') as f:
    content = f.read()
    f.seek(0, 0)
    f.write("pyimport vex".rstrip('\r\n') + '\n' + content)

js2py.translate_file('./src/js/bundled/main.js', './src/main.py')


