import React from 'react'

import styles from './styles.module.css'

const EditExpense = (props) => (
  <div>Edit expense {props.match.params.id}</div>
)

export default EditExpense