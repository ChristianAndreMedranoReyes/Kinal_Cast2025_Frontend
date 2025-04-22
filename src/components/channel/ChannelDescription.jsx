import { useFollowChannel, useUserDetails } from "../../shared/hooks"

const FollowButton = ({ channelId, getChannels }) => {
    const { followChannel } = useFollowChannel();

    const handleFollowChannel = () => {
        followChannel(channelId, getChannels)
    }

    return 
        <button></button>
}