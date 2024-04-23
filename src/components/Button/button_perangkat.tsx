import Link from "next/link"
import {IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import CreatePelanggan from "@/app/pelanggan/create/tambah";
export const CreateButton = () => {
    return(
        <Link 
        href="/perangkat/create"
                  className={`inline-flex items-center space-x-1 text-white 
                  bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm`}>
            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const EditButton = () => {
    return(
        <Link href="/perangkat/edit" 
        className="rounded-sm border p-1 hover:bg-blue-100">
            <IoPencil size={20}/>
        </Link>
    )
}

export const DeleteButton = () => {
    return(
        <button 
        className="rounded-sm border p-1 hover:bg-red-100">
            <IoTrashOutline size={20}/>
        </button>
    )
}