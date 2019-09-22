from flask import render_template, Blueprint

hello_blueprint = Blueprint("hello", __name__)


@hello_blueprint.route("/")
def hello_world() -> str:
    return render_template("base.template.html")
