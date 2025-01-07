from PIL import Image, ImageDraw

# 设置图片尺寸
width, height = 500, 500
image = Image.new("RGBA", (width, height))

# 创建一个绘图对象
draw = ImageDraw.Draw(image)

# 计算中心点
center_x, center_y = width // 2, height // 2

# 遍历每个像素，设置透明度
for x in range(width):
    for y in range(height):
        # 计算当前像素到中心的距离
        distance = ((x - center_x) ** 2 + (y - center_y) ** 2) ** 0.5
        # 计算透明度，距离越远透明度越低
        alpha = int(255 * (1 - distance / (width // 2)))
        alpha = max(0, min(255, alpha))  # 确保透明度在0到255之间
        draw.point((x, y), (255, 255, 255, 255-alpha))  # 设置白色和透明度

# 保存图片
image.save("transparent_rectangle.png")
