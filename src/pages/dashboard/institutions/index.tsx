import {MODULE_ROUTES} from "@/constants";
import Link from "next/link";
import {Card, Form, Modal, Toast} from "@/components";
import {GetStaticProps} from "next";
import {DashboardLayout} from "@/layouts";
import {useContext, useState} from "react";
import {ModalContext, ToastContext} from "@/contexts";

export default function Institutions({institutions}: any) {
    const [showModal, setShowModal] = useState(false)

    return (

        <DashboardLayout>
            <div className="flex flex-col gap-2.5">
                <section className="flex justify-between items-center">
                    <span>Create a new institution</span>
                    <ModalContext.Provider value={{showModal, setShowModal}}>
                        <Modal title="New Institution" header="New Institution" subtitle="Create a new institution"
                               content={<ModalForm/>}/>
                    </ModalContext.Provider>
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

const ModalForm = () => {
    const {showModal, setShowModal} = useContext(ModalContext)
    const {setShowToast} = useContext(ToastContext)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setShowModal(!showModal)
        setShowToast({
            type: "success",
            location: "topCenter",
            message: "Institution created successfully"
        })
        console.log(e.target.name)
    }

    return (
        <Form onSubmit={handleSubmit} method="post" className="h-full flex flex-col gap-5">
            <Form.Content className="flex flex-col gap-2.5">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Input type="text" id="name" name="name" placeholder="Name"/>
            </Form.Content>
            <Form.Content className="flex flex-col gap-2.5">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Input type="text" id="description" name="description" placeholder="Description"/>
            </Form.Content>
            <Form.Content className="flex flex-col gap-2.5 mt-2.5">
                <Form.Button type="submit" className="btn">Create Institution</Form.Button>
            </Form.Content>
        </Form>
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