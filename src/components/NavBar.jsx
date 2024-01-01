import React from 'react'

export function NavBar() {
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className="">
                    {/* Image  */}
                    <div className="flex justify-center mb-5">
                        {/* Image Tag  */}
                        <img
                            className='img-logo'
                            src="./src/logo.JPG"
                            alt="img"
                        />
                    </div>

                    {/* Heading Tag  */}
                    <h1 className='text-white text-3xl lg:text-6xl font-medium text-center mb-3'>
                        Herramienta Quita Fondos
                    </h1>

                    {/* Paragraph Tag  */}
                    <p className='text-white text-2xl font-light text-center mb-3'>
                        Rapida, Simple y Efectiva
                    </p>


                </div>
            </div>
        </div>
    )
}