import React from 'react'
import close_modal from '../assets/icons/close.svg'

export const Modal = ({id, description, techList}) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box bg-web-back1 text-web-text2 font-khand">

                <div>
                    <p className='mt-5 overflow-y-scroll max-h-60'>{description}</p>
                    <div className='flex flex-wrap gap-2 mt-5'>
                        {techList}
                    </div>
                </div>
                <div className="modal-action flex justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button><img src={close_modal} alt="" /></button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
