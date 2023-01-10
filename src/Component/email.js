import React, { Component } from 'react';
import { Members } from '../mock';
import {Multiselect} from 'multiselect-react-dropdown'

class Email extends Component {
    state = {}
    render() {
        const option = Members
        return (
            <>
                <form action="" className='email_form'>
                    <div className='from_div'>
                        <label htmlFor="" className='email_label'> From:
                            <input type="text" name="" id="" className='input' />
                        </label>
                    </div>
                    <div className='to_div'>
                        <label htmlFor="" className='email_label'>To:
                            {/* <select name="" id="" className='select_input' multiple="multiple">
                                <option value="select">select</option>
                                {Members.map((m) => {
                                    return (
                                        <option value={m.name}>{m.name}</option>
                                    )
                                })}
                            </select> */}
                                <Multiselect options={option} displayValue='name'/>
                        </label>
                    </div>
                    <div className='subject_div'>
                        <label htmlFor="" className='email_label'>Subject:
                        <textarea name="" id="" cols="30" rows="3" className='sub_text' ></textarea>
                        </label>
                    </div>
                    <div className='email_div'>
                        <label htmlFor="" className='email_label'>Email:</label>
                        <textarea name="" id="" cols="63" rows="15" className='textarea'></textarea>
                    </div>
                        <input type="submit" value='OK' className='ok_btn' />
                </form>
            </>
        );
    }
}

export default Email;