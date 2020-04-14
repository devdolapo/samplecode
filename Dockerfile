FROM python:3
WORKDIR /var/app
copy . /var/app
RUN pip install flask
CMD ["python", "sample.py"]
