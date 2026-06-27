# 工程项目地图 - 使用说明

## 功能说明

- 🗺️ 中国地图上标注所有工程项目位置
- 📍 点击项目图标查看详细信息
- ✏️ 支持添加、编辑、删除项目
- 📱 手机/电脑自适应
- ☁️ 数据存储在 LeanCloud（国内服务器，速度快）

---

## 第一步：配置 LeanCloud（数据云端存储）

### 1. 注册账号
访问 https://leancloud.cn/register 注册账号（用手机号注册即可）

### 2. 创建应用
- 登录后点击「控制台」→「创建应用」
- 应用名称填：`工程项目地图`
- 选择「开发版」（免费）
- 地区选「华北」（国内节点）

### 3. 创建数据表
进入应用 →「数据存储」→「创建 Class」
- Class 名称填：`Project`
- 选择「普通 Class」

然后在 `Project` 表里添加以下字段（点「添加列」）：
| 字段名 | 类型 | 说明 |
|--------|------|------|
| name | String | 项目名称 |
| city | String | 所在城市 |
| type | String | 项目类型 |
| status | String | 项目状态 |
| amount | Number | 合同额（万元）|
| scale | String | 项目规模 |
| contractor | String | 承建方 |
| remark | String | 备注 |

### 4. 获取密钥
进入应用 →「设置」→「应用凭证」
复制以下三个值，填入 `index.html` 文件顶部：

```javascript
const LC_APP_ID = '你的AppID';
const LC_APP_KEY = '你的AppKey';
const LC_SERVER_URL = '你的服务器地址'; // 格式如：https://xxxx.leancloud.cn
```

---

## 第二步：本地测试

直接用浏览器打开 `index.html` 即可测试。

> 如果未配置 LeanCloud，会自动使用浏览器本地存储（数据仅保存在本机）。

---

## 第三步：部署到公网（所有人可访问）

### 方案A：Vercel 部署（推荐，免费）
1. 注册 https://vercel.com（用 GitHub 账号登录）
2. 点击「New Project」→ 导入你的 GitHub 仓库
3. 上传 `index.html` 到 GitHub 仓库
4. 部署完成后获得一个 `xxx.vercel.app` 的网址

### 方案B：国内平台部署
- ** Gitee Pages**（国内访问快）：https://gitee.com/
- **腾讯云静态网站托管**：https://cloud.tencent.com/product/cos
- **阿里云 OSS 静态托管**：https://oss.console.aliyun.com/

### 方案C：直接分享 HTML 文件
把 `index.html` 发给别人，他们用浏览器打开就能用（数据存在各自本地）。

---

## 城市坐标说明

`index.html` 中已内置了全国主要城市的坐标。
填写项目地点时，请填写「城市名+市」，例如：
- ✅ 正确：`北京市`、`呼和浩特市`、`郑州市`
- ❌ 错误：`北京`、`内蒙四子王旗`

如果项目所在地不在列表中，可以在 `CITY_COORDS` 对象中添加，格式：
```javascript
"城市名": [经度, 纬度],
```

---

## 常见问题

**Q：不想注册 LeanCloud，能用吗？**
A：可以！未配置 LeanCloud 时自动使用本地存储，但数据只存在本机。

**Q：怎么让所有人看到同样的数据？**
A：必须配置 LeanCloud（或类似云端数据库），这样数据存在云端，所有人访问同一个网址看到的数据是同步的。

**Q：手机上能正常用吗？**
A：可以，页面是响应式设计，手机浏览器打开网址即可使用。
