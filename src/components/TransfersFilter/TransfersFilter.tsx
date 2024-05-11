import { Checkbox, CheckboxProps, ConfigProvider } from 'antd';
// import { useState } from 'react';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useSelector, useDispatch } from 'react-redux';

import { setCheckedList } from '../../redux/actions/localActions';

import * as Styles from './TransfersFilter.styles'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
// const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки'];

export default function TransfersFilter () {
    // const ticketsFilter = useSelector((state) => console.log(state))
    // console.log(ticketsFilter)
    const dispatch = useDispatch();
    const checkedList = useSelector((state: any) => state.ticketsFilter.checkboxValues);

    // const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

        const checkAll = plainOptions.length === checkedList.length;
        const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

        const onChange = (list: CheckboxValueType[]) => {
            dispatch(setCheckedList(list));
            // setCheckedList(list);
            // console.log(list)
        };

        const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
            dispatch(setCheckedList(e.target.checked ? plainOptions : []))
            // setCheckedList(e.target.checked ? plainOptions : []);
            // console.log(e.target.checked)
        };

    return (
        <Styles.Settings>
            КОЛИЧЕСТВО ПЕРЕСАДОК
            <ConfigProvider
              theme={{
                    token: {
                        lineHeight: 3,
                        fontSize: 12,
                    },
                }}
            >
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Все
                </Checkbox>
                <CheckboxGroup
                  options={plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
            </ConfigProvider>
        </Styles.Settings>
    )
}