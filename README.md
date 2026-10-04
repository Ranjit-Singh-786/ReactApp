# Student Portal

Simple React frontend with a FastAPI and SQLite backend.

## Run the Application

Open a terminal in the project folder:

```bash
npm install
npm start
```

The React application runs at `http://localhost:3000`.

Open a second terminal in the same project folder:

```bash
pip install fastapi uvicorn
uvicorn app:app --reload
```

The FastAPI backend runs at `http://localhost:8000`.

Student form requests are sent to `POST http://localhost:8000/students`. Submitted data is stored in the local `students.db` SQLite database.

## Test

```bash
npm test -- --watchAll=false --runInBand
```
