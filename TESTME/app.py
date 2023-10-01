from flask import Flask, render_template, redirect, session, request
import hashlib


app = Flask(__name__)
app.secret_key = 'your_secret_key'

users = {
    'john': '6dcd69f1307e40b09010c38a4e667b4c28b31cde59b012c5e3aaffa266e23c4a' 
}

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def write_login_data(username, password):
    with open('login_data.txt', 'a') as file:
        file.write(f"{username}:{password}\n")

@app.route('/')
def home():
    if 'username' in session:
        return render_template('Entry.html', username=session['username'])
    else:
        return redirect('/login')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username in users and users[username] == hash_password(password):
            session['username'] = username
            return redirect('/')
        else:
            return render_template('login.html', error='Invalid credentials')

    return render_template('login.html', error='')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username in users:
            return render_template('signup.html', error='Username already exists')

        users[username] = hash_password(password)
        session['username'] = username
        write_login_data(username, password)  # Write login data to file
        return redirect('/')

    return render_template('signup.html', error='')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/')

@app.route('/maketest')
def maketest():
    if 'username' in session:
        return render_template('maketest.html', username=session['username'])
    else:
        return redirect('/login')

@app.route('/givetest')
def givetest():
    if 'username' in session:
        return render_template('givetest.html', username=session['username'])
    else:
        return redirect('/login')

@app.route('/home/teacher')
def home_teacher():
    return render_template('home2.html')

@app.route('/home/student')
def home_student():
    return render_template('home.html')
@app.route('/services')
def services():
    return render_template('services.html')
@app.route('/about')
def about():
    return render_template('about.html')
@app.route('/contact')
def contact():
    return render_template('contact.html')
@app.route('/marks')
def marks():
    return render_template('marks.html')

def save_data(name, email, message):
    # Open the text file in append mode
    with open("contact_data.txt", "a") as file:
        # Write the form data to the text file
        file.write("Name: {}\n".format(name))
        file.write("Email: {}\n".format(email))
        file.write("Message: {}\n".format(message))
        file.write("---------------------------\n")



@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    save_data(name, email, message)

    return render_template('thank_you.html', name=name)
if __name__ == '__main__':
    app.run()
