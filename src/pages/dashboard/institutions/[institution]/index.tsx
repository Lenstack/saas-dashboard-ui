import {useRouter} from "next/router";
import {DashboardLayout} from "@/layouts";
import {Form, Modal} from "@/components";
import {ModalContext} from "@/contexts";
import {useContext, useState} from "react";

export default function Institution() {
    const router = useRouter()
    const {institution} = router.query

    return (
        <DashboardLayout>
            <div>
                <section className="flex justify-between items-center">
                    <span>Create a new group for <span
                        className="text-orange-200">{institution}</span> institution</span>
                    <Modal title={"New Group"} header={"New Group"} subtitle={"Create a new group"}
                           content={<ModalForm/>}/>
                </section>
            </div>
        </DashboardLayout>
    )
}

const ModalForm = () => {
    const {showModal, setShowModal} = useContext(ModalContext)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setShowModal(!showModal)
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
            <Form.Content className="flex flex-col gap-2.5">
                <Form.Label htmlFor="start-date">Start Date</Form.Label>
                <Form.Input type="date" id="start-date" name="start-date" placeholder="Start Date"/>
            </Form.Content>
            <Form.Content className="flex flex-col gap-2.5">
                <Form.Label htmlFor="end-date">End Date</Form.Label>
                <Form.Input type="date" id="end-date" name="end-date" placeholder="End Date"/>
            </Form.Content>
            <Form.Content className="flex flex-col gap-2.5 mt-2.5">
                <Form.Button type="submit" className="btn">Create Group</Form.Button>
            </Form.Content>
        </Form>
    )
}