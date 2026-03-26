const Index = () => {
  return (
    <div className="flex min-h-screen flex-col gap-6" style={{ backgroundColor: '#f2f3f7', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#23313e' }}>城市生命线安全运行监测AI助手</h1>
      <p style={{ color: '#5d6b81', fontSize: '14px' }}>高保真原型已生成，请点击下方链接查看</p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a href="/prototype/index.html" style={{ padding: '10px 24px', background: '#2395ff', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontSize: '14px' }}>
          进入AI助手主界面
        </a>
        <a href="/prototype/console.html" style={{ padding: '10px 24px', background: '#fff', color: '#2395ff', border: '1px solid #2395ff', borderRadius: '4px', textDecoration: 'none', fontSize: '14px' }}>
          进入控制台
        </a>
      </div>
    </div>
  );
};

export default Index;
