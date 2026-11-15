// 金星班表的連線設定（GitHub 上實際使用的內容）
window.SCHEDULE_CONFIG = {
  // 目錄 (租用戶) 識別碼
  tenantId: 'd265d19d-3bf8-4d9b-8438-863e8309d436',
  // 應用程式 (用戶端) 識別碼
  clientId: 'e0acb3b8-97fc-46a6-aa0b-0a409689822d',
  // 團隊的 SharePoint 網站網址
  siteUrl: 'https://galaxyca.sharepoint.com/sites/-672',
  // 「排班編輯」群組的物件識別碼
  editorGroupId: 'd326725a-7205-4826-81ae-c88c53a202cb',
  // 「金星視覺-工作」團隊群組的物件識別碼（權限管理頁的同事名單）
  teamGroupId: '8f7fa11f-c8ce-4f37-90c6-3ea8fa8ee0ba',
  // 各項權限對應的群組物件識別碼
  groups: {
    timeSelf: 'ea33b5c5-a5a0-49e8-8ade-089c4675ae9d',     // 班表-填自己時間
    timeSupport: '648a1026-6dbf-4542-afbf-5da0567e2de7',   // 班表-填支援時間
    viewTime: '25458b95-0627-4f92-8eed-b510ce76baba',     // 班表-看大家時間
    editTime: '80e0631f-bedc-4ce1-9af9-539cf830e7b6',     // 班表-改大家時間
    km: '5f6b4f67-b47d-4bc5-8d97-e9d8c610fd0f',             // 班表-登記里程
    export: '4a9290e9-4547-42c3-8aa9-a1a2dcc03e94',     // 班表-匯出
    admin: '27541af4-d287-40f8-ba35-910c7bf30ee5'        // 班表-權限管理
  },
  // 清單名稱
  lists: { staff: '人員', options: '車輛選項', jobs: '場次', ext: '外調車輛', days: '每日狀態', trash: '最近刪除', times: '工時', mileage: '里程紀錄' },
  // 每隔幾秒自動更新一次
  pollSeconds: 30
};
