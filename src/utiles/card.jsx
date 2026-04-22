export function Card({ item }) {
    return (
        <div className="card">
            <h2>{item.salutation} {item.full_name_search}</h2>
            {item.husband_mobile && <span> 📱 בעל: {item.husband_mobile}</span>}
            {item.wife_mobile && <span> 📱 אשה: {item.wife_mobile}</span>}
            <p> 🏠 {item.city} {item.street} {item.building_number} {item.entrance_number} {item.apartment_number} {item.neighborhood}</p>
            <p> 🕍 {item.synagogue}</p>
            <p> 👶 ילדים בבית: {item.children_at_home_count || 0}</p>
            {item.has_married_children && <p> 💍 חיתן ילדים</p>}
            <p>
                {item.email_1 && <span> 📧 אימייל: {item.email_1} </span>}
                {item.email_2 && <span> 📧 אימייל: {item.email_2} </span>}
            </p>
            <p>
                {item.system_phone_1 && <span> ☎️ טלפון מערכת 1: {item.system_phone_1}</span>}
                {item.system_phone_2 && <span> ☎️ טלפון מערכת 2: {item.system_phone_2}</span>}
            </p>
            <p>
                {item.home_phone && <span> ☎️ טלפון בית: {item.home_phone}</span>}
                {item.whatsapp_number && <span> 💬 מספר וואטסאפ: {item.whatsapp_number}</span>}
            </p>
            <p>
                {item.father_name && <span> 👨 שם האב: {item.father_name} </span>}
                {item.wife_name && <span> 👩 שם האשה: {item.wife_name}</span>}
            </p>
            {item.is_groom_of_rabbi && <p> 🎩 חתן של הרב: {item.is_groom_of_rabbi}</p>}
            <p>
                {item.id_number && <span> 🪪 תעודת זהות בעל: {item.id_number} </span>}
                {item.wife_id_number && <span> 🪪 תעודת זהות אשה: {item.wife_id_number} </span>}
            </p>
        </div>
    );
}