import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { User } from "@/app/api/incident-report/models/User";
import bcrypt from 'bcrypt';
import { database } from '../../../config/database'

const uri = database.mongodb.uri

if (!uri) {
    throw new Error("A URI do banco de dados não está definida");
}
const client = new MongoClient(uri);

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const email = searchParams.get("email")

    try {
        await client.connect();
        const database = client.db("vollmed");
        const collection = database.collection("users");

        if (id || email) {
            let usuario;
            if (id) {
                usuario = await collection.findOne({ _id: new ObjectId(id) });
            } else if (email) {
                usuario = await collection.findOne({ email: email });
            }

            if (!usuario) {
                return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
            }
            return NextResponse.json(usuario);
        } else {
            const usuarios = await collection.find({}).toArray();
            return NextResponse.json(usuarios);
        }
    } catch (error) {
        return NextResponse.json({ error: "Erro ao buscar dados" });
    } finally {
        await client.close();
    }
}

export async function POST(request: NextRequest) {
    try {
        const { email, password, role } = await request.json();

        if (!email || !password || !role) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await client.connect();
        const database = client.db("vollmed");
        const collection = database.collection("users");

        const newUser: User = { email, password: hashedPassword, role }; // Using hashed password
        await collection.insertOne(newUser);

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao inserir dados" }, { status: 500 });
    } finally {
        await client.close();
    }
}