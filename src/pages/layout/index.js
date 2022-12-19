import axios from 'axios'
import {
    Form,
    Input,
    Button,
    DatePicker,
    message

} from 'antd';



const { TextArea } = Input;

const prefixSelector = (
    <Form.Item noStyle>
        <span>htpps://t.cn</span>
    </Form.Item>
);
//点击提交
const onFinish = (values) => {

    let url = 'www.baidu.com';//请求地址
    let params = {
        Origin: values.Origin,
        Short: values.Short,
        Comment: origin.Comment,
        startTime: values.startTime,
        ExpireTime: values.ExpireTime
    }
    axios.post(url, params).then((res) => {
        console.log(res);
        message.success('Submit success!');
    })

};
//距离样式
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 6,
            offset: 10,
        },
    },
};
function Index() {
    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ marginTop: '50px' }}
                onFinish={onFinish}
            >

                <Form.Item label="原网址"
                    name="Origin"
                    rules={[
                        {
                            type: 'url',
                            message: '不符合url格式',
                        },
                        {
                            required: true,
                            message: '请输入地址',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="自定义后缀"
                    name="Short"
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item label="备注"
                    name="Comment"
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="起始时间"
                    name="startTime"
                    rules={[

                        {
                            required: true,
                            message: '请选择',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="失效时间"
                    name="ExpireTime"
                    rules={[

                        {
                            required: true,
                            message: '请选择',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>



                <Form.Item {...tailFormItemLayout}>

                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>


                </Form.Item>
            </Form>
        </>
    );
}
export default Index