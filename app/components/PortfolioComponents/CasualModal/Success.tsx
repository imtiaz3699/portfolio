import React from 'react'
import Modal from 'antd/es/modal/Modal'
function Success({ isOpen,onClose }: { isOpen: boolean,onClose:any }) {
    return (
        <Modal
            open={isOpen}
            footer = {null}
            closable = {false}
            className = "w-[586px] "
            centered
        >
            <div className = 'bg-[#8AABBD]'>
                fasdfasd
            </div>
        </Modal>
    )
}

export default Success
