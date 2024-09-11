from fastapi import FastAPI
from models import User
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
)

users = []

@app.post("/create-user")
async def create_user(user: User):
        users.append(user.dict())
        return {"message": "User created successfully", "user": user}

@app.get("/get-users")
async def get_users():
    return users
# python -m uvicorn main:app --reload ---- command to run fast api
