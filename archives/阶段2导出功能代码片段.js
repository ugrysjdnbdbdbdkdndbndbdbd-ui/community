// Phase 2 Export Functions - 需要插入到 app 对象中，在 exportDiagnosis 函数之后

// --- Phase 2: Export Functions ---
// Export diagnosis report as PDF
exportDiagnosisPDF: function() {
    const diagSection = document.getElementById('mode-diagnosis-content') || document.getElementById('toolbox-diagnosis-content');
    if(!diagSection) {
        this.showToast('无法找到诊断内容', 'error');
        return;
    }

    if(typeof window.jspdf === 'undefined' || typeof html2canvas === 'undefined') {
        this.showToast('PDF导出需要 jsPDF 和 html2canvas 库支持', 'warning');
        return;
    }

    this.showLoading('正在生成PDF报告...');
    
    html2canvas(diagSection, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if needed
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        const filename = `社区产品体检报告-${new Date().toISOString().slice(0,10)}.pdf`;
        pdf.save(filename);
        this.hideLoading();
        this.showToast('PDF导出成功！', 'success');
    }).catch(error => {
        console.error('PDF导出错误:', error);
        this.hideLoading();
        this.showToast('PDF导出失败', 'error');
    });
},

// Export diagnosis report as Word
exportDiagnosisWord: async function() {
    const diagSection = document.getElementById('mode-diagnosis-content') || document.getElementById('toolbox-diagnosis-content');
    if(!diagSection) {
        this.showToast('无法找到诊断内容', 'error');
        return;
    }

    if(typeof docx === 'undefined') {
        this.showToast('Word导出需要 docx.js 库支持', 'warning');
        return;
    }

    this.showLoading('正在生成Word文档...');

    try {
        // Extract text content
        const chart = this.state.charts.diagRadar || this.state.charts['toolbox-diagRadar'];
        const data = chart?.data?.datasets?.[0]?.data || [];
        const diagTextEl = document.getElementById('diag-text') || document.getElementById('toolbox-diag-text');
        const feedback = diagTextEl?.innerText || '';
        const dimensions = ['社交密度', '公共性', '治理强度', '算法推荐', '经济闭环'];

        // Create Word document
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        text: "社区产品体检报告",
                        heading: docx.HeadingLevel.HEADING_1,
                        alignment: docx.AlignmentType.CENTER,
                        spacing: { after: 300 }
                    }),
                    new docx.Paragraph({
                        text: `生成时间：${new Date().toLocaleString('zh-CN')}`,
                        alignment: docx.AlignmentType.CENTER,
                        spacing: { after: 400 }
                    }),
                    new docx.Paragraph({
                        text: "5D基因指纹评分",
                        heading: docx.HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 200 }
                    }),
                    ...dimensions.map((dim, idx) => new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `${dim}：`,
                                bold: true
                            }),
                            new docx.TextRun(`${data[idx] || 0}分`)
                        ],
                        spacing: { after: 100 }
                    })),
                    new docx.Paragraph({
                        text: "诊断反馈",
                        heading: docx.HeadingLevel.HEADING_2,
                        spacing: { before: 400, after: 200 }
                    }),
                    new docx.Paragraph({
                        text: feedback || '暂无反馈',
                        spacing: { after: 400 }
                    })
                ]
            }]
        });

        // Generate and download
        const blob = await docx.Packer.toBlob(doc);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `社区产品体检报告-${new Date().toISOString().slice(0,10)}.docx`;
        a.click();
        URL.revokeObjectURL(url);
        this.hideLoading();
        this.showToast('Word导出成功！', 'success');
    } catch (error) {
        console.error('Word导出错误:', error);
        this.hideLoading();
        this.showToast('Word导出失败', 'error');
    }
},

// Export cases data as Excel
exportCasesToExcel: function() {
    if(typeof XLSX === 'undefined') {
        this.showToast('Excel导出需要 SheetJS 库支持', 'warning');
        return;
    }

    const cases = typeof communityCases !== 'undefined' ? communityCases : {};
    const caseKeys = Object.keys(cases);
    
    if(caseKeys.length === 0) {
        this.showToast('没有可导出的案例数据', 'warning');
        return;
    }

    this.showLoading('正在生成Excel文件...');

    try {
        // Prepare data
        const data = [['案例名称', '类型', '社交密度', '公共性', '治理强度', '算法推荐', '经济闭环', '标签']];
        
        caseKeys.forEach(key => {
            const caseData = cases[key];
            const scores = caseData.scores || [0, 0, 0, 0, 0];
            const tags = (caseData.tags || []).join(', ');
            data.push([
                caseData.title || key,
                caseData.subtitle || '',
                scores[0] || 0,
                scores[1] || 0,
                scores[2] || 0,
                scores[3] || 0,
                scores[4] || 0,
                tags
            ]);
        });

        // Create workbook
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '案例数据');

        // Set column widths
        ws['!cols'] = [
            { wch: 20 }, // 案例名称
            { wch: 30 }, // 类型
            { wch: 12 }, // 社交密度
            { wch: 12 }, // 公共性
            { wch: 12 }, // 治理强度
            { wch: 12 }, // 算法推荐
            { wch: 12 }, // 经济闭环
            { wch: 30 }  // 标签
        ];

        // Generate and download
        const filename = `社区产品案例库-${new Date().toISOString().slice(0,10)}.xlsx`;
        XLSX.writeFile(wb, filename);
        this.hideLoading();
        this.showToast('Excel导出成功！', 'success');
    } catch (error) {
        console.error('Excel导出错误:', error);
        this.hideLoading();
        this.showToast('Excel导出失败', 'error');
    }
},

// Export cases data as CSV
exportCasesToCSV: function() {
    const cases = typeof communityCases !== 'undefined' ? communityCases : {};
    const caseKeys = Object.keys(cases);
    
    if(caseKeys.length === 0) {
        this.showToast('没有可导出的案例数据', 'warning');
        return;
    }

    try {
        // Prepare CSV content
        let csv = '案例名称,类型,社交密度,公共性,治理强度,算法推荐,经济闭环,标签\n';
        
        caseKeys.forEach(key => {
            const caseData = cases[key];
            const scores = caseData.scores || [0, 0, 0, 0, 0];
            const tags = (caseData.tags || []).join(';');
            const title = (caseData.title || key).replace(/,/g, '，');
            const subtitle = (caseData.subtitle || '').replace(/,/g, '，');
            
            csv += `"${title}","${subtitle}",${scores[0] || 0},${scores[1] || 0},${scores[2] || 0},${scores[3] || 0},${scores[4] || 0},"${tags}"\n`;
        });

        // Download CSV
        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' }); // BOM for Excel
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `社区产品案例库-${new Date().toISOString().slice(0,10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('CSV导出成功！', 'success');
    } catch (error) {
        console.error('CSV导出错误:', error);
        this.showToast('CSV导出失败', 'error');
    }
},










