import React from "react";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";


function EventPage() {
    const router = useRouter()

    return (
        <Layout title="Add new event">
            <h1>My event</h1>
            <h3>{JSON.stringify(router.query, null, 2)}</h3>
        </Layout>
    );
}

export default EventPage;
