import { ConfigProvider, Flex, Radio, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import TicketsList from '../TicketsList';
import * as ticketsActions from '../../redux/actions/localActions';

import * as Styles from './TicketsFilter.styles'

export default function TicketsFilter() {
    const dispatch = useDispatch()
    const selectedOption = useSelector((state: any) => state.localReducer.selectedOption)
    const handleRadioChange = (e: any) => {
        dispatch(ticketsActions.setSelectedOption(e.target.value))
    }
    return (
    <Styles.Filters>
        <ConfigProvider
          theme={{
                token: {
                    padding: 42,
                    fontSize: 9,
                },
            }}
        >
            <Flex vertical gap="middle">
                <Radio.Group
                  defaultValue="cheap"
                  buttonStyle="solid"
                  size="large"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                    <Radio.Button value="cheap">САМЫЙ ДЕШЕВЫЙ</Radio.Button>
                    <Radio.Button value="fast">САМЫЙ БЫСТРЫЙ</Radio.Button>
                    <Radio.Button value="optimal">ОПТИМАЛЬНЫЙ</Radio.Button>
                </Radio.Group>
            </Flex>
        </ConfigProvider>
        <TicketsList />
        <ConfigProvider
          theme={{
                token: {
                    // padding: 42,
                    fontSize: 9,
                    sizeMS: 187,
                },
            }}
        >
            <Button
              type="primary"
              size="large"
              onClick={() => dispatch(ticketsActions.showMore())}
            >
                ПОКАЗАТЬ ЕШЕ 5 БИЛЕТОВ!
            </Button>
        </ConfigProvider>
    </Styles.Filters>
  );
}
