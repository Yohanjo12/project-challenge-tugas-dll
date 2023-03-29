from flask import Flask, render_template, request, redirect, url_for

app= Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/<string:file>")
def html_file(file):
    return render_template(f"html/{file}")

@app.route("/register")
def register():
    return render_template("register.html")
@app.route("/login") #, methods=["GET", "POST"]
def login():
    return render_template("login.html")

@app.route("/auth", methods=["GET", "POST"])
def auth():

	if request.method == "POST":
		username = request.form.get("username")
		password = request.form.get("password")
		if username == "admin" and password == "123456":
			return render_template("html/success.html")
		return render_template("login.html", err="Login Failed, Please try again!")
		return redirect(url_for("login"))
	return redirect(url_for("login"))


if __name__ == '__main__':
    app.run(debug=True)

# form login, route login, route register, form register