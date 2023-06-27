import React, { useState } from 'react'
import { faqs } from '../../data/faq';

export default function Accordion() {

    const [collapsed, setCollapsed] = useState(false);
    const [indexBlock, setIndexBlock] = useState("");
    return (
        <div>
            {
                faqs.map((faq, index) => (
                    <div key={faq.id} className={`my-3 flex flex-wrap justify-start overflow-hidden border-solid border border-BORDER_GRAY border-opacity-75   ${collapsed && indexBlock === `collapse-${faq.id}` ? 'bg-BLACK text-WHITE' : 'bg-WHITE text-TEXT_GREY'}`}>
                        <label className="grow px-1 sm:px-5 py-4 font-bold text-base sm:text-lg " htmlFor={`collapse-${faq.id}`}>
                            <span
                                className='text-ORANGE'
                            >
                                {faq.id}:
                            </span> {faq.question}
                        </label>
                        <input
                            onClick={() => {
                                setCollapsed(!collapsed);
                                setIndexBlock(`collapse-${faq.id}`)
                            }}
                            className="peer mx-2 my-4 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name={`collapse-${faq.id}`} id={`collapse-${faq.id}`}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        <div className="py-5 px-2 border border-BORDER_GRAY border-opacity-75 bg-WHITE text-TEXT_GREY -transparent absolute -translate-y-full scale-75 scale-y-0 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                            {faq.response}
                        </div>
                    </div>
                ))
            }



        </div>
    )
}
