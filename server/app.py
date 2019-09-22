import flask

from server.views.hello import hello_blueprint
from server.configurations import DevelopmentConfig

app = flask.Flask(__name__, static_folder="./dist")

app.config.from_object(DevelopmentConfig)

app.register_blueprint(hello_blueprint)
