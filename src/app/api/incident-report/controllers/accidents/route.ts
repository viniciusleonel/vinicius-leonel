import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { database } from '../../../config/database'

const uri = database.mongodb.uri

if (!uri) {
    throw new Error("A URI do banco de dados não está definida");
}
const client = new MongoClient(uri);

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    try {
        await client.connect();
        const database = client.db("gerenciamento-trafego");
        const collection = database.collection("acidentes");

        if(id) {
            const acidente = await collection.findOne({ _id: new ObjectId(id)})
            if (!acidente) {
                return NextResponse.json({ error: "Acidente não encontrado!"})
            }
            return NextResponse.json(acidente)
        } else {
            const acidentes = await collection.find({}).toArray();
            return NextResponse.json(acidentes);
        }
    } catch (error) {
        return NextResponse.json({ error: "Erro ao buscar dados" });
    } finally {
        await client.close();
    }
}