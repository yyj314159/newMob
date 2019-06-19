import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import index from '../components/index';
let memberIndex = () => import("../components/member/memberIndex");
let memberInfo = () => import("../components/member/memberInfo");
let information = () => import("../components/information/information");
let siteInvitation = () => import("../components/member/site/siteInvitation");
let inviteSite = () => import("../components/member/site/inviteSite");
let siteHandle = () => import("../components/member/site/siteHandle");
let siteDetail = () => import("../components/member/site/siteDetail");
let mySite = () => import("../components/member/site/mySite");
let accountSetting = () => import("../components/member/setting/accountSetting");
let myAddress = () => import("../components/member/setting/myAddress/addressList");
let editAddress = () => import("../components/member/setting/myAddress/editAddress");
let myInvoice = () => import("../components/member/setting/myInvoice/invoiceList");
let editInvoice = () => import("../components/member/setting/myInvoice/editInvoice");
let receiverAccount = () => import("../components/member/setting/receiverAccount/receiverAccountList");
let editReceiverAccount = () => import("../components/member/setting/receiverAccount/editReceiverAccount");
let securitySetting = () => import("../components/member/setting/securitySetting/securitySetting");
let certification = () => import("../components/member/setting/securitySetting/certification");
let updatePassWord = () => import("../components/member/setting/securitySetting/updatePassWord");
let updatePhoneNumber = () => import("../components/member/setting/securitySetting/updatePhoneNumber");
let bargain = () => import("../components/bargain/bargainList");
let bargainDetail = () => import("../components/bargain/bargainDetail");
let buyersBidding = () => import("../components/bargain/buyersBidding");
let submitProductOrder = () => import("../components/productOrder/submitOrder");
let productPayment = () => import("../components/productOrder/payment");
let myProductOrder = () => import("../components/productOrder/orderList");
let productOrderDetail = () => import("../components/productOrder/orderDetail");
let productBuyerCredentials = () => import("../components/productOrder/buyerCredentials");
let productLogisticsInformation = () => import("../components/productOrder/logisticsInformation");
let productPaymentHistory = () => import("../components/productOrder/paymentHistory");
let submitServerOrder = () => import("../components/serverOrder/submitOrder");
let serverPayment = () => import("../components/serverOrder/payment");
let myServerOrder = () => import("../components/serverOrder/orderList");
let serverOrderDetail = () => import("../components/serverOrder/orderDetail");
let serverBuyerCredentials = () => import("../components/serverOrder/buyerCredentials");
let serverPaymentHistory = () => import("../components/serverOrder/paymentHistory");
let serverBuyerAdditionalBill = () => import("../components/serverOrder/buyerAdditionalBill");
let serverAdjustAmount = () => import("../components/serverOrder/adjustAmount");
let startAfterSale = () => import("../components/productAfterSale/startAfterSale");
let myProductAfterSale = () => import("../components/productAfterSale/productAfterSaleList");
let productAfterSaleDetail = ()=> import("../components/productAfterSale/productAfterSaleDetail");
let complainProductAfterSale = () => import("../components/productAfterSale/startComplain");
let productAfterSaleHistory = () => import("../components/productAfterSale/historyDetail");
let salesReturn = () => import("../components/productAfterSale/salesReturn");
let startServerComplain = () => import("../components/serverComplain/startServerComplain");
let myServerComplain = () => import("../components/serverComplain/serverComplainList");
let serverComplainDetail = () => import("../components/serverComplain/complainDetail");
let serverComplainHistory = () => import("../components/serverComplain/historyDetail");
let complainServerComplain = () => import("../components/serverComplain/startComplain");
let commentCenter = () => import("../components/comment/commentCenter");
let commentDetail = () => import("../components/comment/commentDetail");
let noComment = () => import("../components/comment/noCommentList");
let publishComment = () => import("../components/comment/publishComment");
let shopCar = () => import("../components/shopCar/shopCar");

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/memberCenter',
            component:index,
            children:[
                {
                    //会员中心首页
                    path:'',
                    component: memberIndex
                },
                {
                    //个人资料
                    path:'memberInfo',
                    component:memberInfo
                },
                {
                    //消息
                    path:'information',
                    component:information
                },
                {
                    //站点邀请列表
                    path:'siteInvitation',
                    component:siteInvitation
                },
                {
                    //邀请站点
                    path:'inviteSite',
                    component:inviteSite
                },
                {
                    //站点处理
                    path:'siteHandle',
                    component:siteHandle
                },
                {
                    //站点详情
                    path:'siteDetail',
                    component:siteDetail
                },
                {
                    //我的站点
                    path:'mySite',
                    component:mySite
                },
                {
                    //账户设置
                    path:'accountSetting',
                    component:accountSetting
                },
                {
                    //收货地址列表
                    path:'myAddress',
                    component:myAddress
                },
                {
                    //修改或添加地址
                    path:'editAddress',
                    component:editAddress
                },
                {
                    //发票列表
                    path:'myInvoice',
                    component:myInvoice
                },
                {
                    //添加或修改发票
                    path:'editInvoice',
                    component:editInvoice
                },
                {
                    //收款账户列表
                    path:'receiverAccount',
                    component:receiverAccount
                },
                {
                    //添加或修改收款账户
                    path:'editReceiverAccount',
                    component:editReceiverAccount
                },
                {
                    //安全设置
                    path:'securitySetting',
                    component:securitySetting
                },
                {
                    //实名认证
                    path:'certification',
                    component:certification
                },
                {
                    //修改密码
                    path:'updatePassWord',
                    component:updatePassWord
                },
                {
                    //修改手机号
                    path:'updatePhoneNumber',
                    component:updatePhoneNumber
                },
                {
                    //议价列表
                    path:'bargain',
                    component:bargain
                },
                {
                    //议价详情
                    path:'bargainDetail',
                    component:bargainDetail
                },
                {
                    //买家叫价
                    path:'buyersBidding',
                    component:buyersBidding
                },
                {
                    //产品提交订单
                    path:'submitProductOrder',
                    component:submitProductOrder
                },
                {
                    //产品订单支付
                    path:'productPayment',
                    component:productPayment
                },
                {
                    //产品订单列表
                    path:'myProductOrder',
                    component:myProductOrder
                },
                {
                    //产品订单详情
                    path:'productOrderDetail',
                    component:productOrderDetail
                },
                {
                    //产品订单卖家凭证
                    path:'productBuyerCredentials',
                    component:productBuyerCredentials
                },
                {
                    //产品订单物流信息
                    path:'productLogisticsInformation',
                    component:productLogisticsInformation
                },
                {
                    //产品订单付款记录
                    path:'productPaymentHistory',
                    component:productPaymentHistory
                },
                {
                    //提交服务订单
                    path:'submitServerOrder',
                    component:submitServerOrder
                },
                {
                    //服务订单支付
                    path:'serverPayment',
                    component:serverPayment
                },
                {
                    //服务订单列表
                    path:'myServerOrder',
                    component:myServerOrder
                },
                {
                    //服务订单详情
                    path:'serverOrderDetail',
                    component:serverOrderDetail
                },
                {
                    //服务订单卖家凭证
                    path:'serverBuyerCredentials',
                    component:serverBuyerCredentials
                },
                {
                    //服务订单付款记录
                    path:'serverPaymentHistory',
                    component:serverPaymentHistory
                },
                {
                    //服务订单卖家追加账单
                    path:'serverBuyerAdditionalBill',
                    component:serverBuyerAdditionalBill
                },
                {
                    //服务订单调整金额
                    path:'serverAdjustAmount',
                    component:serverAdjustAmount
                },
                {
                    //发起产品售后
                    path:'startAfterSale',
                    component:startAfterSale
                },
                {
                    //产品售后列表
                    path:'myProductAfterSale',
                    component:myProductAfterSale
                },
                {
                    //产品售后详情
                    path:'productAfterSaleDetail',
                    component:productAfterSaleDetail
                },
                {
                    //申诉产品售后
                    path:'complainProductAfterSale',
                    component:complainProductAfterSale
                },
                {
                    //产品售后历史详情
                    path:'productAfterSaleHistory',
                    component:productAfterSaleHistory
                },
                {
                    //退货
                    path:'salesReturn',
                    component:salesReturn
                },
                {
                    //发起服务投诉
                    path:'startServerComplain',
                    component:startServerComplain
                },
                {
                    //服务投诉列表
                    path:'myServerComplain',
                    component:myServerComplain
                },
                {
                    //服务投诉详情
                    path:'serverComplainDetail',
                    component:serverComplainDetail
                },
                {
                    //服务投诉历史详情
                    path:'serverComplainHistory',
                    component:serverComplainHistory
                },
                {
                    //申诉服务投诉
                    path:'complainServerComplain',
                    component:complainServerComplain
                },
                {
                    //评价中心
                    path:'commentCenter',
                    component:commentCenter
                },
                {
                    //评价详情
                    path:'commentDetail',
                    component:commentDetail
                },
                {
                    //待评价列表
                    path:'noComment',
                    component:noComment
                },
                {
                    //发布评价
                    path:'publishComment',
                    component:publishComment
                },
                {
                    //购物车
                    path:'shopCar',
                    component:shopCar
                },
            ]
        }
    ]
})