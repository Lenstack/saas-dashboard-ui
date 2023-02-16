import {MODULE_ROUTES} from "@/constants";
import Link from "next/link";
import {Card, Modal} from "@/components";
import {GetStaticProps} from "next";
import {DashboardLayout} from "@/layouts";

export default function Institutions({institutions}: any) {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-2.5">
                <section className="flex justify-between items-center">
                    <span>Create a new institution</span>
                    <Modal title="Create" header="Create a new institution" subtitle="fill all form" content={"context component"}/>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {
                        institutions.map(({name, description}: any, index: any) => (
                            <Link href={`/dashboard/institutions/${name}`} key={index}>
                                <Card className="card">
                                    <Card.Header>
                                        <h3>{name}</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>{description}</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))
                    }
                </section>
            </div>
        </DashboardLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const institutions = MODULE_ROUTES
    return {
        props: {
            institutions
        }
    }
}