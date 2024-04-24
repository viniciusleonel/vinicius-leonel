import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function Loading() {
    return (
        <div className="w-full min-h-max flex flex-col items-center justify-center gap-4">
            <CircularProgress color="primary" size="lg" aria-label="Loading..."/>
            <p>Loading...</p>
        </div>
    )
}