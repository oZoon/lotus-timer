import React from 'react';

export default (props) => {
    return (
        <td className="table-2-2">
            <ul className="table-2-2-list">
                <li className="table-2-2-item">Участник №{props.i}</li>
                <li className="table-2-2-item">ООО "Рога"</li>
                <li className="table-2-2-item">ИНН 6670418941</li>
                <li className="table-2-2-item">г. Екатеринбург</li>
            </ul>
        </td>
    )
}
