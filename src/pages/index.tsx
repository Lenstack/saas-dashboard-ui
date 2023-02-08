import {Card} from "@/components";
import {CloudArrowUpIcon} from "@heroicons/react/24/outline"

export default function Home() {
    return (
        <section className="grid lg:grid-cols-6 gap-2.5">
            <Card className="card lg:col-start-2 lg:col-end-3">
                <Card.Header className="text-center p-5">
                    <h1>Choose yours excel files</h1>
                </Card.Header>
                <Card.Body>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-64 border-2
                                    border-gray-300 border-dashed rounded-lg cursor-pointer
                                    bg-white
                                    dark:hover:bg-[#161616]
                                    dark:bg-[#111111]
                                    hover:bg-[#FAFAFA]
                                    dark:border-zinc-500
                                    dark:hover:border-zinc-400
                                    dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <CloudArrowUpIcon className="w-12 h-12"/>
                                <p className="mb-2 text-sm">
                                    <span className="font-semibold">Click to upload a files</span>
                                </p>
                                <p className="text-xs">XLSX</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <ul className="flex flex-col gap-5 items-center">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </Card.Footer>
            </Card>
            <Card className="card lg:col-start-3 lg:col-end-6">
                <Card.Header>
                    <h1>Please choose your platform and get a form.</h1>
                </Card.Header>
                <Card.Body>
                    <p>Home page</p>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </section>
    )
}
