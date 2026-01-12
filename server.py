import http.server
import socketserver
import webbrowser
import os

PORT = 8000

# Change to the script's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

# MIME types for proper file serving
Handler.extensions_map.update({
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.mp3': 'audio/mpeg',
})

print("=" * 50)
print("🎂 HAPPY BIRTHDAY ZAREEN! 🎂")
print("=" * 50)
print(f"\n🌐 Server running at: http://localhost:{PORT}")
print(f"📱 Zareen ko yeh link bhej: http://YOUR_IP:{PORT}")
print("\n💡 Apna IP find karne ke liye: ipconfig (Windows)")
print("\n❌ Band karne ke liye: Ctrl + C")
print("=" * 50)

# Open browser automatically
webbrowser.open(f'http://localhost:{PORT}')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server band ho gaya. Happy Birthday Zareen! ❤️")
        httpd.shutdown()