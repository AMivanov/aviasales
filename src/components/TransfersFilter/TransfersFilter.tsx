import { Checkbox, CheckboxProps, ConfigProvider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { RootState } from '../../redux/store/store';
import { setCheckedList } from '../../redux/actions/localActions';

import * as Styles from './TransfersFilter.styles'
import * as Constants from './TransfersFilter.constants'

export default function TransfersFilter () {
    const dispatch = useDispatch();
    const checkedList = useSelector((state: RootState) => state.localReducer.checkboxValues);
    const CheckboxGroup = Checkbox.Group;
    const checkAll = Constants.plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < Constants.plainOptions.length;

    const onChange = (list: CheckboxValueType[]) => {
        dispatch(setCheckedList(list));
    }

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        dispatch(setCheckedList(e.target.checked ? Constants.plainOptions : []))
    }

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
                  options={Constants.plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
            </ConfigProvider>
        </Styles.Settings>
    )
}