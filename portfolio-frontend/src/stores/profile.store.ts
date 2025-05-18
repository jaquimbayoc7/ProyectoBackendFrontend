import { axiosClient } from "@/services/axios.service";
import { create } from "zustand";

interface Profile {
    id: string;
    name: string;
    specialty:string;
    phone:string;
    email: string;
    birthDay:string;
    location: string;
    createAt?: Date;
    updateAt?: Date;
}

type Store ={
    profile : Profile | null
    getProfile(): void
}

export const useprofileStore = create<Store>()(set => ({
    profile:null,
    getProfile: async() =>{
        try {
            const {data} = await axiosClient.get<Profile>("/profile")
            set({
                profile:data
            })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    },
}))
