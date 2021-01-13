export default {
  data() {
    return {
      // 请假
      EgLeaveFormRead: [
        {
          type: "select",
          col: 24,
          labelwraperCol: [6, 18],
          key: "leaveType",
          labelName: "请假类型",
          helping: "",
          rules: { require: true, message: "请输入请假类型", triger: "change" },
          validateStatus: "",
          placeholder: "请输入请假类型",
          isShow: true,
          readOnly: true,
          leaveType: "01",
          codeData: {
            data: [],
            code: "KQ_LEAVETYPE",
            valueName: "code",
            labelName: "name"
          }
        },
        {
          type: "datepicker",
          key: "startTime",
          col: 24,
          labelName: "请假开始时间",
          labelwraperCol: [6, 18],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto" },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "select",
          col: 6,
          labelwraperCol: [24, 24],
          labelName: "上下午",
          labelopacity: true,
          validateStatus: "",
          helping: "",
          key: "foreNoon",
          foreNoon: "01",
          codeData: {
            code: "CT_0161",
            valueName: "code",
            labelName: "name"
          },
          attrbute: null,
          isShow: true,
          readOnly: false
        },
        {
          onChange: "validDate",
          type: "datepicker",
          key: "endTime",
          col: 24,
          labelName: "请假结束时间",
          labelwraperCol: [6, 18],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto" },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "select",
          col: 6,
          labelwraperCol: [24, 24],
          labelName: "上下午",
          labelopacity: true,
          validateStatus: "",
          helping: "",
          key: "afterNoon",
          afterNoon: "02",
          codeData: {
            code: "CT_0161",
            valueName: "code",
            labelName: "name"
          },
          attrbute: null,
          isShow: true,
          readOnly: false
        }
      ],
      EgLeaveForm: [
        {
          type: "select",
          col: 24,
          labelwraperCol: [24, 24],
          key: "leaveType",
          labelName: "请假类型",
          helping: "",
          rules: { require: true, message: "请输入请假类型", triger: "change" },
          validateStatus: "",
          placeholder: "请输入请假类型",
          isShow: true,
          readOnly: false,
          leaveType: "",
          codeData: {
            data: [],
            code: "KQ_LEAVETYPE",
            valueName: "code",
            labelName: "name"
          }
        },
        {
          type: "datepicker",
          key: "startTime",
          col: 17,
          labelName: "请假开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto" },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: false
        },
        {
          type: "select",
          col: 6,
          labelwraperCol: [24, 24],
          labelName: "上下午",
          labelopacity: true,
          validateStatus: "",
          helping: "",
          key: "foreNoon",
          foreNoon: "01",
          codeData: {
            code: "CT_0161",
            valueName: "code",
            labelName: "name"
          },
          attrbute: null,
          isShow: true,
          readOnly: false
        },
        {
          onChange: "validDate",
          type: "datepicker",
          key: "endTime",
          col: 17,
          labelName: "请假结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto" },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: false,
          disabledInfo: null
        },
        {
          type: "select",
          col: 6,
          labelwraperCol: [24, 24],
          labelName: "上下午",
          labelopacity: true,
          validateStatus: "",
          helping: "",
          key: "afterNoon",
          afterNoon: "02",
          codeData: {
            code: "CT_0161",
            valueName: "code",
            labelName: "name"
          },
          attrbute: null,
          isShow: true,
          readOnly: false
        },
        {
          type: "number",
          col: 24,
          labelwraperCol: [24, 24],
          key: "days",
          labelName: "请假时长",
          helping: "",
          validateStatus: "",
          placeholder: "",
          isShow: true,
          readOnly: true,
          days: ""
        },
        {
          type: "input",
          col: 24,
          key: "qjyy",
          labelName: "请假原因",
          labelwraperCol: [24, 24],
          qjyy: "",
          validateStatus: "",
          rules: { require: true, message: "请填写请假原因", triger: "blur" },
          helping: "",
          attrbute: {
            type: "textarea"
          },
          placeholder: "",
          isShow: true,
          readOnly: false
        }
      ],
      // 出差
      EgBusinessTripForm: [
        {
          type: "datepicker",
          key: "startTime",
          col: 24,
          labelName: "出差开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto" },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: false
        },
        // {
        //   type: "select",
        //   col: 6,
        //   labelwraperCol: [24, 24],
        //   labelName: "上下午",
        //   labelopacity: true,
        //   validateStatus: "",
        //   helping: "",
        //   key: "foreNoon",
        //   foreNoon: "01",
        //   codeData: {
        //     code: "CT_0161",
        //     valueName: "code",
        //     labelName: "name"
        //   },
        //   attrbute: null,
        //   isShow: true,
        //   readOnly: false
        // },
        {
          type: "datepicker",
          key: "endTime",
          col: 24,
          labelName: "出差结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto" },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: false
        },
        // {
        //   type: "select",
        //   col: 6,
        //   labelwraperCol: [24, 24],
        //   labelName: "上下午",
        //   labelopacity: true,
        //   validateStatus: "",
        //   helping: "",
        //   key: "afterNoon",
        //   afterNoon: "02",
        //   codeData: {
        //     code: "CT_0161",
        //     valueName: "code",
        //     labelName: "name"
        //   },
        //   attrbute: null,
        //   isShow: true,
        //   readOnly: false
        // },
        {
          type: "number",
          col: 24,
          labelwraperCol: [24, 24],
          key: "days",
          labelName: "出差时长",
          helping: "",
          validateStatus: "",
          placeholder: "",
          isShow: true,
          readOnly: true,
          days: ""
        },
        {
          type: "selectTree",
          col: 24,
          labelwraperCol: [24, 24],
          key: "leaveType",
          labelName: "出差城市",
          helping: "",
          rules: { require: true, message: "请选择出差城市", triger: "change" },
          validateStatus: "",
          placeholder: "请选择出差城市",
          isShow: true,
          readOnly: false,
          leaveType: "",
          codeData: {
            data: [],
            code: "CT_0051",
            valueName: "code",
            labelName: "name"
          }
        }
      ],
      // 加班
      EgWorkOvertimeForm: [
        {
          type: "datepicker",
          key: "startTime",
          col: 24,
          labelName: "加班开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm", width: "auto", showTime: true },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: false
        },
        {
          type: "datepicker",
          key: "endTime",
          col: 24,
          labelName: "加班结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm ", width: "auto", showTime: true },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: false
        },
        {
          type: "number",
          col: 24,
          labelwraperCol: [24, 24],
          key: "days",
          labelName: "时长/小时",
          helping: "",
          validateStatus: "",
          placeholder: "",
          isShow: true,
          readOnly: true,
          days: "",
          days_name: ""
        },
        {
          type: "radio",
          col: 24,
          labelwraperCol: [24, 24],
          key: "isTx",
          labelName: "加班补偿",
          helping: "",
          rules: { require: true, message: "请选择加班补偿", triger: "change" },
          validateStatus: "",
          placeholder: "请选择加班补偿",
          isShow: false,
          readOnly: false,
          isTx: "",
          codeData: {
            data: [
              {
                code: "0",
                name: "加班费"
              },
              {
                code: "1",
                name: "调休"
              }
            ],
            valueName: "code",
            labelName: "name"
          }
        }
      ],
      EgWorkOvertimeFormRead: [
        {
          type: "datepicker",
          key: "startTime",
          col: 24,
          labelName: "加班开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm", width: "auto", showTime: true },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "datepicker",
          key: "endTime",
          col: 24,
          labelName: "加班结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm ", width: "auto", showTime: true },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "number",
          col: 24,
          labelwraperCol: [24, 24],
          key: "days",
          labelName: "时长/小时",
          helping: "",
          validateStatus: "",
          placeholder: "",
          isShow: true,
          readOnly: true,
          days: "",
          days_name: ""
          // attrbute: {
          //   afterText: "小时"
          // }
        },
        {
          type: "radio",
          col: 24,
          labelwraperCol: [24, 24],
          key: "isTx",
          labelName: "加班补偿",
          helping: "",
          rules: { require: true, message: "请选择加班补偿", triger: "change" },
          validateStatus: "",
          placeholder: "请选择加班补偿",
          isShow: true,
          readOnly: true,
          isTx: "",
          codeData: {
            data: [
              {
                code: "0",
                name: "加班费"
              },
              {
                code: "1",
                name: "调休"
              }
            ],
            valueName: "code",
            labelName: "name"
          }
        }
      ],
      EgOutdoorForm: [
        {
          type: "datepicker",
          key: "startTime",
          col: 24,
          labelName: "开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm", width: "auto", showTime: true },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: false
        },
        {
          type: "datepicker",
          key: "endTime",
          col: 24,
          labelName: "结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm ", width: "auto", showTime: true },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: false
        },
        {
          type: "number",
          col: 24,
          labelwraperCol: [24, 24],
          key: "days",
          labelName: "时长/小时",
          helping: "",
          validateStatus: "",
          placeholder: "",
          isShow: true,
          readOnly: true,
          days: "",
          days_name: ""
        },
        {
          type: "input",
          col: 24,
          labelwraperCol: [24, 24],
          key: "bfkh",
          labelName: "拜访客户",
          helping: "",
          rules: { require: true, message: "请选择拜访客户", triger: "change" },
          validateStatus: "",
          placeholder: "请选择拜访客户",
          isShow: true,
          readOnly: false,
          bfkh: ""
        }
      ],
      EgOutdoorFormRead: [
        {
          type: "datepicker",
          key: "startTime",
          col: 24,
          labelName: "开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          startTime: null,
          validateStatus: "",
          helping: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm", width: "auto", showTime: true },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "datepicker",
          key: "endTime",
          col: 24,
          labelName: "结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          endTime: null,
          validateStatus: "",
          disabledInfo: {
            type: 1,
            timespace: {},
            time: "",
            timeType: 1
          },
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD HH:mm ", width: "auto", showTime: true },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "number",
          col: 24,
          labelwraperCol: [24, 24],
          key: "days",
          labelName: "时长/小时",
          helping: "",
          validateStatus: "",
          placeholder: "",
          isShow: true,
          readOnly: true,
          days: "",
          days_name: ""
        },
        {
          type: "input",
          col: 24,
          labelwraperCol: [24, 24],
          key: "bfkh",
          labelName: "拜访客户",
          helping: "",
          rules: { require: true, message: "请选择拜访客户", triger: "change" },
          validateStatus: "",
          placeholder: "请选择拜访客户",
          isShow: true,
          readOnly: true,
          bfkh: ""
        }
      ],
      // 转正
      EgTurnRegularForm: [
        {
          type: "datepicker",
          key: "SYKSSJ",
          col: 24,
          labelName: "试用期开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          SYKSSJ: null,
          SYKSSJ_name: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto", showTime: true },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "datepicker",
          key: "SYJSSJ",
          col: 24,
          labelName: "试用期结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          SYJSSJ: null,
          SYJSSJ_name: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto", showTime: true },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "datepicker",
          key: "ZZSJ",
          col: 24,
          labelName: "转正时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择转正时间", triger: "change" },
          ZZSJ: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD ", width: "auto", showTime: true },
          placeholder: "请选转正时间",
          isShow: true,
          readOnly: false,
          disabledInfo: null
        },
        {
          type: "radio",
          label: "TYPE",
          key: "ZZLB",
          labelName: "转正类别",
          labelwraperCol: [24, 24],
          ZZLB: "2",
          col: 24,
          validateStatus: "",
          helping: "",
          rules: { require: true, message: "请选择转正类别", triger: "change" },
          attrbute: {
            type: "radioGroup",
            disabled: false,
            size: "default",
            buttonStyle: "solid"
          },
          codeData: {
            code: "CT_0107",
            valueName: "code",
            labelName: "name"
          },
          isShow: true,
          readOnly: false
        }
      ],
      EgTurnRegularFormRead: [
        {
          type: "datepicker",
          key: "SYKSSJ",
          col: 24,
          labelName: "试用期开始时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择开始时间", triger: "change" },
          SYKSSJ: null,
          SYKSSJ_name: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto", showTime: true },
          placeholder: "请选择开始时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "datepicker",
          key: "SYJSSJ",
          col: 24,
          labelName: "试用期结束时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择结束时间", triger: "change" },
          SYJSSJ: null,
          SYJSSJ_name: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto", showTime: true },
          placeholder: "请选择结束时间",
          isShow: true,
          readOnly: true
        },
        {
          type: "datepicker",
          key: "ZZSJ",
          col: 24,
          labelName: "转正时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择转正时间", triger: "change" },
          ZZSJ: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD ", width: "auto", showTime: true },
          placeholder: "请选转正时间",
          isShow: true,
          readOnly: true,
          disabledInfo: null
        },
        {
          type: "radio",
          label: "TYPE",
          key: "ZZLB",
          labelName: "转正类别",
          labelwraperCol: [24, 24],
          ZZLB: "2",
          col: 24,
          validateStatus: "",
          helping: "",
          rules: { require: true, message: "请选择转正类别", triger: "change" },
          attrbute: {
            type: "radioGroup",
            disabled: false,
            size: "default",
            buttonStyle: "solid"
          },
          codeData: {
            code: "CT_0107",
            valueName: "code",
            labelName: "name"
          },
          isShow: true,
          readOnly: true
        }
      ],
      // 离职
      EgLeaveOfficeForm: [
        {
          type: "datepicker",
          key: "LZSJ",
          col: 24,
          labelName: "预计离职时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择离职时间", triger: "change" },
          LZSJ: null,
          LZSJ_name: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto", showTime: true },
          placeholder: "请选择离职时间",
          isShow: true,
          readOnly: false,
          disabledInfo: null
        },
        {
          type: "select",
          col: 24,
          labelwraperCol: [24, 24],
          labelName: "离职主要原因",
          validateStatus: "",
          helping: "",
          key: "LZZYYY",
          LZZYYY: [],
          codeData: {
            code: "CT_000C",
            valueName: "code",
            labelName: "name"
          },
          rules: { require: true, message: "请选择离职主要原因", triger: "change" },
          mode: "multiple",
          isShow: true,
          readOnly: false
        },
        {
          col: 24,
          validateStatus: "",
          helping: null,
          LZHQX: "",
          readOnly: false,
          LZHQX_name: "",
          type: "input",
          isShow: true,
          mode: "default",
          labelwraperCol: [24, 24],
          placeholder: "",
          labelName: "离职后去向",
          attrbute: { size: "default", disabled: false, type: "textarea" },
          key: "LZHQX"
        },
        {
          type: "selectPerson",
          col: 12,
          labelwraperCol: [24, 24],
          key: "HANDOVER",
          labelName: "交接人",
          HANDOVER: "",
          TABLENAME: "",
          validateStatus: "",
          helping: "",
          rules: { require: false, message: "请选择人员", triger: "change" },
          placeholder: "",
          attrbute: {
            multiple: false,
            treeType: "orgTree",
            placeholder: "请选择人员",
            clearable: false,
            title: "dfgfh",
            empStatus: "",
            orgIds: ""
          },
          codeData: {
            code: "RY_JBXX",
            valueName: "code",
            labelName: "name"
          },
          isShow: true,
          readOnly: false
        }
      ],
      EgLeaveOfficeFormRead: [
        {
          type: "datepicker",
          key: "LZSJ",
          col: 24,
          labelName: "预计离职时间",
          labelwraperCol: [24, 24],
          rules: { require: true, message: "请选择离职时间", triger: "change" },
          LZSJ: null,
          LZSJ_name: null,
          validateStatus: "",
          helping: "",
          attrbute: { type: "date", format: "YYYY-MM-DD", width: "auto", showTime: true },
          placeholder: "请选择离职时间",
          isShow: true,
          readOnly: true,
          disabledInfo: null
        },
        {
          type: "select",
          col: 24,
          labelwraperCol: [24, 24],
          labelName: "离职主要原因",
          validateStatus: "",
          helping: "",
          key: "LZZYYY",
          LZZYYY: [],
          codeData: {
            code: "CT_000C",
            valueName: "code",
            labelName: "name"
          },
          rules: { require: true, message: "请选择离职主要原因", triger: "change" },
          mode: "multiple",
          isShow: true,
          readOnly: true
        },
        {
          col: 24,
          validateStatus: "",
          helping: null,
          LZHQX: "",
          readOnly: true,
          LZHQX_name: "",
          type: "input",
          isShow: true,
          mode: "default",
          labelwraperCol: [24, 24],
          placeholder: "",
          labelName: "离职后去向",
          attrbute: { size: "default", disabled: false, type: "textarea" },
          key: "LZHQX"
        },
        {
          type: "selectPerson",
          col: 12,
          labelwraperCol: [24, 24],
          key: "HANDOVER",
          labelName: "交接人",
          HANDOVER: "",
          TABLENAME: "",
          validateStatus: "",
          helping: "",
          rules: { require: false, message: "请选择人员", triger: "change" },
          placeholder: "",
          codeData: {
            code: "RY_JBXX",
            valueName: "code",
            labelName: "name"
          },
          attrbute: {
            multiple: false,
            treeType: "orgTree",
            placeholder: "请选择人员",
            clearable: false,
            title: "dfgfh",
            empStatus: "",
            orgIds: ""
          },
          isShow: true,
          readOnly: true
        }
      ]
    };
  },
  methods: {
    getGroupformItem(item, readOnly) {
      if (readOnly && item.key == "EgLeaveForm") {
        let keys = item.key + "Read";
        return this[keys];
      } else return this[item.key];
    }
  }
};
