dir = ["exhibition","workshop","lecture","shingakusoudan","access"]
f=File.read("index.html",encoding:Encoding::UTF_8)
index=f.gsub(" class=\"currentPage\"","").split(/<div id="main-top">|<div id="footer">/)
dir.each do |d|
  contents=File.read(d+"/contents.html",encoding:Encoding::UTF_8)
  File.write(d+".html",(index.first+"\n<div id=\"main\">\n"+contents+"\n</div>\n<!--MAIN-->\n<div id=\"footer\">\n"+index.last).gsub("href=\"#{d}\.html\"","href=\"#{d}\.html\" class=\"currentPage\"").gsub("container","#{d}-container"))
end


