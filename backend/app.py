from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Numbers(BaseModel):
    number1: int
    number2: int

@app.post("/add")
def add_numbers(numbers: Numbers):
    result = numbers.number1 + numbers.number2
    return {"sum": result}


