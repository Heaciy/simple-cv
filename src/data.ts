import { type CV } from "./type";


const data: CV = {
    "header": {
        "name": "张万森",
        "lines": [
            [["电话", "18657057298"], ["邮箱", "zhang_wansen@gmail.com"], ["现居城市", "上海"]],
            [["年龄", "24岁"], ["性别", "男"]],
            [["当前状态", "在职"], ["意向城市", "武汉"], ["求职意向", "Nodejs/Golang/全栈"]],
            [["期望薪资", "24k~28k"]],
        ]
    },
    "body": [
        {
            "title": "教育经历",
            "sections": [
                {
                    "leftTop": "南京工学院",
                    "rightTop": "2018年09月 - 2022年06月",
                    "leftBottom": "软件工程 本科 计算机科学与技术学院",
                    "rightBottom": "南京",
                    "lines": [],
                }
            ]
        },
        {
            "title": "专业技能",
            "sections": [
                {
                    "leftTop": "",
                    "rightTop": "",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        ["计算机基础", "掌握计算机网络、数据结构与算法、操作系统基础知识，具备良好的工程实践能力。"],
                        ["后端开发", "熟悉Golang、Node.js，了解Python、Erlang、C等语言，具备高并发和分布式系统开发经验。"],
                        ["前端开发", "熟悉Vue 3、React等前端框架，掌握TypeScript，具备良好的组件化开发和前端工程化能力。"],
                        ["架构设计", "了解微服务架构、分布式系统、消息队列（Kafka、RabbitMQ）等技术，能够合理设计系统架构。"],
                        ["数据库", "熟悉MySQL、PostgreSQL数据库优化，了解Redis、ClickHouse等数据存储方案及应用场景。"],
                        ["容器与运维", "掌握Docker、Kubernetes、CI/CD等工具，能够优化应用部署流程，提高运维效率。"],
                        ["Linux", "熟悉Linux开发环境，了解Shell脚本、网络编程、I/O多路复用，具备一定的系统调优经验。"],
                        ["开发工具", "熟练使用Git，了解Git Flow等开发流程，能够高效进行版本管理和团队协作。"],
                        ["测试与优化", "具备单元测试、集成测试经验，关注系统性能优化和代码质量提升。"],
                        ["安全", "了解常见Web安全漏洞（XSS、CSRF、SQL注入等）及基本的防御措施，具备一定的安全意识。"]
                    ]
                }
            ]
        },
        {
            "title": "工作经历",
            "sections": [
                {
                    "leftTop": "某互联网公司",
                    "rightTop": "2019年07月 - 2022年06月",
                    "leftBottom": "高级后端开发工程师",
                    "rightBottom": "北京",
                    "lines": [
                        "负责公司核心后端系统的架构设计与优化，主导多个高并发业务的性能提升。",
                        "主导Go语言微服务改造，优化数据库查询，提升API响应速度，提高系统稳定性。",
                        "搭建Prometheus监控体系，结合ELK日志分析，提高线上问题排查效率。",
                        "参与技术方案评审，推进团队代码规范化，提升开发效率与质量。"
                    ]
                },
                {
                    "leftTop": "某云计算公司",
                    "rightTop": "2022年07月 - 2024年02月",
                    "leftBottom": "资深后端工程师",
                    "rightBottom": "上海",
                    "lines": [
                        "负责云计算PaaS平台的后端开发，优化API网关，提升系统吞吐量。",
                        "参与Serverless架构设计，基于Go和Kubernetes实现高效自动伸缩机制。",
                        "推动PostgreSQL数据库优化，结合Redis缓存策略，大幅降低数据库负载。",
                        "制定微服务治理方案，优化CI/CD流程，提高部署效率，减少故障发生率。"
                    ]
                },
                {
                    "leftTop": "某AI公司",
                    "rightTop": "2024年03月 - 至今",
                    "leftBottom": "技术专家",
                    "rightBottom": "深圳",
                    "lines": [
                        "负责AI模型推理平台的架构优化，提升大规模推理任务的吞吐能力。",
                        "基于Go开发高性能推理服务，优化gRPC通信，减少延迟，提高并发处理能力。",
                        "设计分布式任务调度系统，结合Kafka和Flink，实现大规模数据处理。",
                        "推动团队技术升级，引入Rust优化关键性能模块，提升整体系统稳定性。"
                    ]
                }
            ]
        },
        {
            "title": "项目经历",
            "sections": [
                {
                    "leftTop": "智能日志分析平台",
                    "rightTop": "2021年06月 - 2022年12月",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "负责系统架构设计与核心功能开发，优化日志存储与检索的性能瓶颈。",
                        "使用Go开发高性能日志处理服务，结合Kafka流式计算，实现千万级日志的实时解析与存储。",
                        "采用ElasticSearch构建全文检索索引，优化查询效率，支持秒级查询大规模数据。",
                        "前端采用Vue 3 + TypeScript 开发数据可视化平台，提供日志分析、告警配置、权限管理等功能。",
                        "使用Go和Redis进行缓存数据管理，实现多级缓存策略，有效减少数据库访问频率，提升系统性能。",
                    ]
                },
                {
                    "leftTop": "分布式爬虫与数据采集系统",
                    "rightTop": "2023年01月 - 2023年11月",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "搭建基于Python Scrapy和Go协程的分布式爬虫系统，支持大规模数据采集。",
                        "使用Redis实现任务调度，采用Kafka进行数据流转，确保系统的高吞吐与稳定性。",
                        "优化PostgreSQL数据库架构，结合ClickHouse存储大规模爬取数据，提升查询效率。",
                        "前端采用Vue 3 + TypeScript 构建数据监控与可视化系统，支持任务管理、异常告警等功能。"
                    ]
                },
                {
                    "leftTop": "IM 即时通讯服务优化",
                    "rightTop": "2024年01月 - 至今",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "维护和优化基于XMPP的即时通讯服务，深入优化消息投递与存储架构。",
                        "使用Go编写自定义插件，扩展ejabberd功能，提高消息处理并发能力。",
                        "优化Redis缓存策略，减少数据库访问，降低系统延迟，提高整体吞吐量。",
                        "实现消息存档与检索功能，优化存储结构，确保高效查询百万级历史消息。"
                    ]
                },
                {
                    "leftTop": "API 网关及微服务架构优化",
                    "rightTop": "2022年03月 - 2023年08月",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "参与公司微服务架构升级，优化API网关，提高系统可扩展性与高并发支持能力。",
                        "使用Go实现高性能网关服务，结合gRPC与RESTful API，支持跨语言调用。",
                        "基于Kubernetes和Istio搭建服务治理体系，实现流量控制、熔断降级与服务发现。",
                        "使用Prometheus + Grafana构建监控告警系统，实时监测微服务运行状态，优化系统稳定性。"
                    ]
                },
                {
                    "leftTop": "大规模用户行为分析平台",
                    "rightTop": "2023年05月 - 2024年03月",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "负责大规模用户行为分析平台的设计与开发，支持实时数据处理与分析。",
                        "基于Flink + Kafka 构建数据流处理架构，实现毫秒级实时用户行为分析。",
                        "优化PostgreSQL与ClickHouse存储方案，提高数据写入吞吐量与查询性能。",
                        "前端采用Vue 3 + ECharts 实现用户行为可视化分析，支持数据动态展示与筛选。"
                    ]
                },
                {
                    "leftTop": "Serverless 云函数平台",
                    "rightTop": "2024年02月 - 至今",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "参与Serverless云函数平台研发，提供弹性计算能力，支持高并发业务。",
                        "使用Go和Rust构建高性能函数执行引擎，优化启动速度和资源利用率。",
                        "基于Kubernetes与Knative搭建Serverless架构，实现自动伸缩与负载均衡。",
                        "支持用户通过Vue 3 + TypeScript 开发可视化部署平台，简化云函数管理流程。"
                    ]
                }
            ]
        },
        {
            "title": "个人总结",
            "sections": [
                {
                    "leftTop": "",
                    "rightTop": "",
                    "leftBottom": "",
                    "rightBottom": "",
                    "lines": [
                        "具备扎实的计算机基础和丰富的全栈开发经验，能够独立完成从后端到前端的系统设计与开发。",
                        "熟悉微服务架构、分布式系统及常见高可用方案，能够结合业务需求优化系统架构。",
                        "主要从事后端开发，擅长使用Golang、Node.js，了解Python、Erlang、C等语言，具备良好的工程实践能力。",
                        "前端方面熟悉Vue、React等框架，掌握TypeScript，能够参与前端架构设计与优化。",
                        "有良好的数据库设计与优化经验，能够根据业务场景合理选择数据库方案，并优化查询性能。",
                        "熟悉Linux环境下的开发和部署，能够使用Docker、Kubernetes等工具提升开发与运维效率。",
                        "关注代码质量和系统可维护性，习惯编写单元测试、集成测试，并遵循良好的编码规范。",
                        "具备良好的沟通协作能力，能够高效推进项目进展，确保产品质量与交付进度。",
                        "热衷于技术学习，喜欢阅读源码，研究新技术，能够快速理解并应用新技术解决实际问题。",
                        "能够高效利用Google、Stack Overflow、GitHub等资源进行问题排查与技术提升。"
                    ]
                }
            ]
        }
    ]
}

export { data };