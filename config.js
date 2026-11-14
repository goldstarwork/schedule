// 工務排班的連線設定
window.SCHEDULE_CONFIG = {
  // 目錄 (租用戶) 識別碼
  tenantId: '請填入',
  // 應用程式 (用戶端) 識別碼
  clientId: '請填入',
  // 團隊的 SharePoint 網站網址
  siteUrl: 'https://galaxyca.sharepoint.com/sites/-672',
  // 「排班編輯」群組的物件識別碼
  editorGroupId: 'd326725a-7205-4826-81ae-c88c53a202cb',
  // 清單名稱
  lists: { staff: '人員', options: '車輛選項', jobs: '場次', ext: '外調車輛', days: '每日狀態', trash: '最近刪除' },
  // 每隔幾秒自動更新一次
  pollSeconds: 30
};
