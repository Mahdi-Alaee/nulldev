"use client"
import React, { useState } from 'react'
import Title from '../module/Title'
import CommentCard from '../module/CommentCard'

const Comments = () => {
    const [comments , setComments] = useState([
        {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnveTKwxve5MH7HXXKE-3iT7_ihOpC0CxLGg&s" , name: "آرش لطیفی" , job : "بنیان گذار پرشین لرن" , messages : " با سلام، می‌خواستم از تیم  نال  تشکر کنم که خیلی  از خدماتشون راضی هستم. طراحی وبسایت ما  را به عهده گرفتن و به نحو احسن انجام دادن. مخصوصا پشتیبانیشون هم فوق العادست ."},
        {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnveTKwxve5MH7HXXKE-3iT7_ihOpC0CxLGg&s" , name: "آرش لطیفی" , job : "بنیان گذار پرشین لرن" , messages : " با سلام، می‌خواستم از تیم  نال  تشکر کنم که خیلی  از خدماتشون راضی هستم. طراحی وبسایت ما  را به عهده گرفتن و به نحو احسن انجام دادن. مخصوصا پشتیبانیشون هم فوق العادست ."},       
        {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnveTKwxve5MH7HXXKE-3iT7_ihOpC0CxLGg&s" , name: "آرش لطیفی" , job : "بنیان گذار پرشین لرن" , messages : " با سلام، می‌خواستم از تیم  نال  تشکر کنم که خیلی  از خدماتشون راضی هستم. طراحی وبسایت ما  را به عهده گرفتن و به نحو احسن انجام دادن. مخصوصا پشتیبانیشون هم فوق العادست ."},   
        {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnveTKwxve5MH7HXXKE-3iT7_ihOpC0CxLGg&s" , name: "آرش لطیفی" , job : "بنیان گذار پرشین لرن" , messages : " با سلام، می‌خواستم از تیم  نال  تشکر کنم که خیلی  از خدماتشون راضی هستم. طراحی وبسایت ما  را به عهده گرفتن و به نحو احسن انجام دادن. مخصوصا پشتیبانیشون هم فوق العادست ."},   
        {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnveTKwxve5MH7HXXKE-3iT7_ihOpC0CxLGg&s" , name: "آرش لطیفی" , job : "بنیان گذار پرشین لرن" , messages : " با سلام، می‌خواستم از تیم  نال  تشکر کنم که خیلی  از خدماتشون راضی هستم. طراحی وبسایت ما  را به عهده گرفتن و به نحو احسن انجام دادن. مخصوصا پشتیبانیشون هم فوق العادست ."},   
    ])
    return (
        <section className="py-20">
            <div className="mx-auto">                
                <Title miniTitle="نظرات مشتریان" title="از زبان مشتریان بشنوید" desc="تیم  نال با تجربه ی بالا و با کمک نیرو های کارآمد، جوان و خلاق 24 ساعته به صورت شبانه روزی در حال خدمات رسانی به مشتریان عزیز است. با استفاده از تخصص ما در زمینه طراحی سایت، میتوانید یک وبسایت حرفه ای و کارآمد را برای کسب و کار خود ایجاد کنید"/>
                <div
                    className="flex items-center gap-x-5 overflow-x-auto hide-scrollbar w-full">
                  {comments.map(comment => <CommentCard {...comment} />)}
                </div>
            </div>
        </section>
    )
}

export default Comments