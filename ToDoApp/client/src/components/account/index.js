import React from "react";
import { MyselfContextConsumer } from "../../context/myselfContext";

export default function Account() {
    return (
        <MyselfContextConsumer>
            {context => {
                const { username, age, gender, name } = context.account ? context.account : { username: '', age: '', gender: '', name: '' }
                return (
                    <div>
                        <div>
                            <input defaultValue={username}></input>

                        </div>
                        <input defaultValue={age}></input>
                        <input defaultValue={name}></input>
                        <input defaultValue={gender}></input>
                    </div>
                )
            }}
        </MyselfContextConsumer>
    )
}