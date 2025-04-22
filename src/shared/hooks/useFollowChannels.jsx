import toast from "react-hot-toast"
import { followChannel as followChannelRequest } from "../../services"

export const useFollowChannels = () => {

    const followChannel = async(channelId, onSucces) => {
        
        const responseData = await followChannelRequest(channelId);

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'Ocurrio un error al seguir el canal'
            )
        }
        
        toast.success('Channel followed succesfully!')
        onSucces(true)
    }

    return{
        followChannel
    }
}
