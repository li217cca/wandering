import React from 'react'
import {questList} from './index.css'
import { connect } from 'react-redux';
export const QuestList = connect(({
// TODO
}) => ({

})) (
    class QuestListClass extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
        }
        render() {
            return (
                <div>
                    QuestList
                </div>
            )
        }
    }
)