console.log(d3.version)

const url = 'https://clarisights-users.s3.eu-central-1.amazonaws.com/frontend-assignment/1000+items+table+response.json'

// d3.json(url, {referrerPolicy: 'no-referrer-when-downgrade'})
//     .then(response => drawViz(response.data))
//     .catch(error => console.log(error))
const data1 = "{\"groups\":{\"Campaign\":{\"metadata\":{\"name\":\"99733871-f7c5-4b52-9773-1ca69816fc03\"}}},\"trend\":[{\"day\":\"2020-06-01\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":178,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-02\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":166,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":21},{\"day\":\"2020-06-03\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":153,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":16},{\"day\":\"2020-06-04\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":162,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":5},{\"day\":\"2020-06-05\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":185,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":15},{\"day\":\"2020-06-06\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":192,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-07\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":187,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-08\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":153,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-09\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":154,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-10\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":128,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":10},{\"day\":\"2020-06-11\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":159,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":22},{\"day\":\"2020-06-12\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":160,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-13\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":186,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":25},{\"day\":\"2020-06-14\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":180,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":25},{\"day\":\"2020-06-15\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":167,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":12},{\"day\":\"2020-06-16\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":155,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":9},{\"day\":\"2020-06-17\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":148,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-18\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":156,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":12},{\"day\":\"2020-06-19\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":178,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-20\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":207,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":22}]}";
data = "[" + data1 + "," + data1 + "]"
const jsonData = JSON.parse(data)
// Entire visualization
const drawViz = data => {
    console.log(data)
    document.getElementById('content').appendChild(makeChart(data))
}

// Function to draw chart for individual campaigns
const makeChart = data => {
    const width = 500, height = 500
    const svg = d3.create("svg")
        .attr("id", "chartArea")
        .attr("viewBox", [0, 0, width, height])

    makeCampaigns(data, svg)

    return svg.node()
}

const makeCampaigns = (data, svg) => {
    const campaignData = data
    makeCampaign(campaignData[0], svg, 0)
    makeCampaign(campaignData[1], svg, 80)
    makeCampaign(campaignData[0], svg, 160)
}

const makeCampaign = (campaignData, svg, y) => {
    const campaignName = campaignData.groups.Campaign.metadata.name
    const acqData = campaignData.trend.map(t => t.aj_coh_0w_and_real_acquisition)
    const instData = campaignData.trend.map(t => t.aj_app_and_installs)
    makeNameTile(campaignName, svg, 0, y, 'Name')
    makeLineChart(acqData, svg, 150, y, 'Acq')
    makeLineChart(instData, svg, 300, y, 'Inst')
}

const makeNameTile = (data, svg, x, y, type) => {
    console.log(data)
    const group = svg.append('svg')
        .attr('class', 'nameArea')
        .attr('x', x)
        .attr('y', y)

    group.append('text')
        .attr('class', 'nameText')
        // .attr('x', 0)
        .attr('y', 10)
        // .attr("alignment-baseline","middle")
        // .attr("fill","grey")
        .text(data);
}

const makeLineChart = (data, svg, x, y, type) => {
    console.log(data)
    const group = svg.append('svg')
        .attr('class', 'lineChartArea')
        .attr('x', x)
        .attr('y', y)

    const maxData = data.reduce((a, c) => Math.max(a, c))
    
        // const svg = d3.select("#content").append("svg").attr("id","chartArea").attr("height",500).attr("width",500)
    
    const lineChartHeight = 50;
    const lineChartWidth = 150;
    
    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, lineChartWidth])
    const yScale = d3.scaleLinear().domain([0, maxData]).range([0, lineChartHeight])
    
    const lineGenerator = d3.line()
        .x((d, i) => {
            // console.log(xScale(i), yScale(d))
            return xScale(i) + 10
        })
        .y((d) => {
            return lineChartHeight - yScale(d) + 10
        })
        .curve(d3.curveMonotoneX)
        // .curve(d3.curveLinear)
    
    const pathAttr = lineGenerator(data)
    const pathAttrSuffix = " L " + (lineChartWidth + 10) + " " + (lineChartHeight + 10) + " L 10 " + (lineChartHeight + 10) + " Z" 
    
    group.append("path")
        .attr("class", "line" + type)
        .attr("d", pathAttr + pathAttrSuffix)
    
    group.append("path")
        .attr("class", "lineBorder" + type)
        .attr("d", pathAttr)
    
    group.selectAll(".points")
        .data(data)
        .enter()
        .append("circle")
            .attr("class", "points points" + type)
            .attr("r", 2)
            .attr("cx", (d, i) => xScale(i) + 10)
            .attr("cy", (d) => lineChartHeight - yScale(d) + 10)

}

drawViz(jsonData)

