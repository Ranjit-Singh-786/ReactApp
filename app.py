import sqlite3

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class StudentCreate(BaseModel):
    name: str
    email: str
    roll_number: str


def create_table():
    with sqlite3.connect("students.db") as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                roll_number TEXT NOT NULL
            )
            """
        )


create_table()


@app.post("/students")
def create_student(student: StudentCreate):
    with sqlite3.connect("students.db") as connection:
        cursor = connection.execute(
            "INSERT INTO students (name, email, roll_number) VALUES (?, ?, ?)",
            (student.name, student.email, student.roll_number),
        )

    return {
        "message": "Student created successfully.",
        "student_id": cursor.lastrowid,
    }
